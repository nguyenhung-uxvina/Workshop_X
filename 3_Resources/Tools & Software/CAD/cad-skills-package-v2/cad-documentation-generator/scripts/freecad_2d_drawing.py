#!/usr/bin/env python3
"""
FreeCAD 2D Technical Drawing Generator
Generates ISO-compliant 2D drawings from 3D models

Usage with FreeCAD MCP:
1. Load/create 3D model
2. Run: generate_2d_drawing(part_name, drawing_config)
3. Export: PDF, DXF, SVG

Author: CAD Documentation Generator Skill
Version: 1.0
"""

import FreeCAD
import Part
import TechDraw
import TechDrawGui

# ============================================================
# CONFIGURATION
# ============================================================

DEFAULT_CONFIG = {
    # Page settings
    'page_size': 'A4',
    'orientation': 'Landscape',
    'scale': 1.0,
    
    # Views to generate
    'views': {
        'front': True,
        'top': True,
        'right': True,
        'isometric': True,
        'section': False,
    },
    
    # Dimensions
    'auto_dimensions': True,
    'dimension_format': '%.1f',
    'tolerance_standard': 'ISO 2768-mK',
    
    # Annotations
    'add_notes': True,
    'material': 'Al 6061-T6',
    'surface_finish': 'Ra 3.2',
    'surface_treatment': '',
    
    # Title block
    'company': 'COMPANY NAME',
    'project': 'PROJECT',
    'drawn_by': '',
    'approved_by': '',
    
    # Output
    'output_dir': '/tmp/',
    'export_pdf': True,
    'export_dxf': True,
    'export_svg': False,
}

# Template paths (adjust for your FreeCAD installation)
TEMPLATES = {
    'A4': {
        'Landscape': 'Mod/TechDraw/Templates/A4_Landscape_ISO7200.svg',
        'Portrait': 'Mod/TechDraw/Templates/A4_Portrait_ISO7200.svg',
    },
    'A3': {
        'Landscape': 'Mod/TechDraw/Templates/A3_Landscape_ISO7200.svg',
        'Portrait': 'Mod/TechDraw/Templates/A3_Portrait_ISO7200.svg',
    },
}

# View positions for A4 Landscape
VIEW_POSITIONS = {
    'A4_Landscape': {
        'front': (120, 100),
        'top': (120, 170),
        'right': (200, 100),
        'isometric': (200, 170),
        'section': (280, 100),
    },
    'A4_Portrait': {
        'front': (105, 180),
        'top': (105, 250),
        'right': (105, 110),
        'isometric': (105, 40),
    },
}

# ============================================================
# MAIN FUNCTIONS
# ============================================================

def generate_2d_drawing(part_name, config=None):
    """
    Generate complete 2D technical drawing from 3D model.
    
    Args:
        part_name: Name of the Part/Body in FreeCAD document
        config: Configuration dict (uses DEFAULT_CONFIG if None)
    
    Returns:
        dict: {page_name, pdf_path, dxf_path, svg_path}
    """
    # Merge config with defaults
    cfg = DEFAULT_CONFIG.copy()
    if config:
        cfg.update(config)
    
    doc = FreeCAD.ActiveDocument
    if not doc:
        raise ValueError("No active FreeCAD document")
    
    # Get the part/body
    part = doc.getObject(part_name)
    if not part:
        raise ValueError(f"Part '{part_name}' not found in document")
    
    # Create drawing page
    page_name = f"{part_name}_Drawing"
    page = create_drawing_page(doc, page_name, cfg)
    
    # Add views
    views = add_orthographic_views(doc, page, part, cfg)
    
    # Add section view if requested
    if cfg['views'].get('section'):
        add_section_view(doc, page, part, views['front'], cfg)
    
    # Add dimensions
    if cfg['auto_dimensions']:
        add_auto_dimensions(doc, page, views, part, cfg)
    
    # Add annotations
    if cfg['add_notes']:
        add_notes_block(doc, page, cfg)
    
    # Update title block
    update_title_block(page, part_name, cfg)
    
    # Recompute
    doc.recompute()
    
    # Export
    result = {
        'page_name': page_name,
        'pdf_path': None,
        'dxf_path': None,
        'svg_path': None,
    }
    
    output_base = f"{cfg['output_dir']}{part_name}"
    
    if cfg['export_pdf']:
        pdf_path = f"{output_base}.pdf"
        export_pdf(page, pdf_path)
        result['pdf_path'] = pdf_path
    
    if cfg['export_dxf']:
        dxf_path = f"{output_base}.dxf"
        export_dxf(page, dxf_path)
        result['dxf_path'] = dxf_path
    
    if cfg['export_svg']:
        svg_path = f"{output_base}.svg"
        export_svg(page, svg_path)
        result['svg_path'] = svg_path
    
    return result


def create_drawing_page(doc, page_name, cfg):
    """Create TechDraw page with template."""
    # Remove existing page if any
    if doc.getObject(page_name):
        doc.removeObject(page_name)
    if doc.getObject(f"{page_name}_Template"):
        doc.removeObject(f"{page_name}_Template")
    
    # Create page
    page = doc.addObject('TechDraw::DrawPage', page_name)
    
    # Add template
    template = doc.addObject('TechDraw::DrawSVGTemplate', f"{page_name}_Template")
    
    # Get template path
    size = cfg['page_size']
    orient = cfg['orientation']
    template_rel = TEMPLATES.get(size, {}).get(orient)
    
    if template_rel:
        # Try to find template in FreeCAD resources
        import os
        freecad_path = FreeCAD.getResourceDir()
        template_path = os.path.join(freecad_path, template_rel)
        if os.path.exists(template_path):
            template.Template = template_path
    
    page.Template = template
    
    return page


def add_orthographic_views(doc, page, part, cfg):
    """Add orthographic projection views."""
    views = {}
    scale = cfg['scale']
    
    pos_key = f"{cfg['page_size']}_{cfg['orientation']}"
    positions = VIEW_POSITIONS.get(pos_key, VIEW_POSITIONS['A4_Landscape'])
    
    # Front View (primary)
    if cfg['views'].get('front', True):
        front = doc.addObject('TechDraw::DrawViewPart', 'FrontView')
        front.Source = [part]
        front.Direction = FreeCAD.Vector(0, 0, 1)  # XY plane
        front.Scale = scale
        front.X, front.Y = positions['front']
        front.HardHidden = True
        front.SmoothVisible = True
        page.addView(front)
        views['front'] = front
    
    # Top View
    if cfg['views'].get('top', True):
        top = doc.addObject('TechDraw::DrawViewPart', 'TopView')
        top.Source = [part]
        top.Direction = FreeCAD.Vector(0, -1, 0)  # Looking down
        top.Scale = scale
        top.X, top.Y = positions['top']
        top.HardHidden = True
        page.addView(top)
        views['top'] = top
    
    # Right View
    if cfg['views'].get('right', True):
        right = doc.addObject('TechDraw::DrawViewPart', 'RightView')
        right.Source = [part]
        right.Direction = FreeCAD.Vector(-1, 0, 0)  # Looking from right
        right.Scale = scale
        right.X, right.Y = positions['right']
        right.HardHidden = True
        page.addView(right)
        views['right'] = right
    
    # Isometric View
    if cfg['views'].get('isometric', True):
        iso = doc.addObject('TechDraw::DrawViewPart', 'IsoView')
        iso.Source = [part]
        iso.Direction = FreeCAD.Vector(1, 1, 1)
        iso.Scale = scale * 0.7
        iso.X, iso.Y = positions['isometric']
        iso.HardHidden = False
        page.addView(iso)
        views['isometric'] = iso
    
    return views


def add_section_view(doc, page, part, base_view, cfg, 
                     section_normal=(0, 1, 0), section_origin=(0, 0, 0)):
    """Add section view."""
    section = doc.addObject('TechDraw::DrawViewSection', 'SectionAA')
    section.BaseView = base_view
    section.Source = [part]
    section.SectionNormal = FreeCAD.Vector(*section_normal)
    section.SectionOrigin = FreeCAD.Vector(*section_origin)
    section.Scale = cfg['scale']
    
    pos_key = f"{cfg['page_size']}_{cfg['orientation']}"
    positions = VIEW_POSITIONS.get(pos_key, VIEW_POSITIONS['A4_Landscape'])
    section.X, section.Y = positions.get('section', (280, 100))
    
    page.addView(section)
    return section


def add_auto_dimensions(doc, page, views, part, cfg):
    """
    Add automatic dimensions to views.
    
    Strategy:
    1. Overall dimensions (L, W, H) on front and top views
    2. Hole diameters on top view
    3. Fillet radii on front view
    """
    dimensions = []
    fmt = cfg['dimension_format']
    
    # Get bounding box for overall dimensions
    if hasattr(part, 'Shape'):
        bbox = part.Shape.BoundBox
        length = bbox.XLength
        width = bbox.YLength
        height = bbox.ZLength
        
        # Add overall length dimension to front view
        if 'front' in views:
            front = views['front']
            dim_l = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Length')
            dim_l.Type = 'DistanceX'
            dim_l.FormatSpec = fmt
            dim_l.Arbitrary = True
            dim_l.ArbitraryText = f"{length:.1f}"
            page.addView(dim_l)
            dimensions.append(dim_l)
            
            # Add height dimension
            dim_h = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Height')
            dim_h.Type = 'DistanceY'
            dim_h.FormatSpec = fmt
            dim_h.Arbitrary = True
            dim_h.ArbitraryText = f"{height:.1f}"
            page.addView(dim_h)
            dimensions.append(dim_h)
        
        # Add width dimension to top view
        if 'top' in views:
            top = views['top']
            dim_w = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Width')
            dim_w.Type = 'DistanceY'
            dim_w.FormatSpec = fmt
            dim_w.Arbitrary = True
            dim_w.ArbitraryText = f"{width:.1f}"
            page.addView(dim_w)
            dimensions.append(dim_w)
    
    # Note: For precise edge-based dimensions, need to reference specific edges
    # This requires analyzing the view's geometry which is more complex
    
    return dimensions


def add_dimension_to_edge(doc, page, view, edge_name, dim_type, format_spec='%.1f'):
    """
    Add dimension to specific edge.
    
    Args:
        dim_type: 'Distance', 'DistanceX', 'DistanceY', 'Diameter', 'Radius', 'Angle'
    """
    dim = doc.addObject('TechDraw::DrawViewDimension', f'Dim_{edge_name}')
    dim.Type = dim_type
    dim.References2D = [(view, edge_name)]
    dim.FormatSpec = format_spec
    page.addView(dim)
    return dim


def add_hole_dimensions(doc, page, view, holes, cfg):
    """
    Add diameter dimensions for holes.
    
    Args:
        holes: list of dicts with {edge_name, diameter, tolerance}
    """
    dims = []
    for i, hole in enumerate(holes):
        dim = doc.addObject('TechDraw::DrawViewDimension', f'Dim_Hole_{i+1}')
        dim.Type = 'Diameter'
        dim.References2D = [(view, hole['edge_name'])]
        
        # Format with tolerance if provided
        if 'tolerance' in hole:
            dim.FormatSpec = f"Ø%.1f {hole['tolerance']}"
        else:
            dim.FormatSpec = 'Ø%.1f'
        
        page.addView(dim)
        dims.append(dim)
    
    return dims


def add_notes_block(doc, page, cfg):
    """Add standard notes annotation."""
    notes_lines = ['NOTES:']
    note_num = 1
    
    # Material
    if cfg.get('material'):
        notes_lines.append(f"{note_num}. MATERIAL: {cfg['material']}")
        note_num += 1
    
    # Tolerance
    if cfg.get('tolerance_standard'):
        notes_lines.append(f"{note_num}. GENERAL TOLERANCE: {cfg['tolerance_standard']}")
        note_num += 1
    
    # Surface finish
    if cfg.get('surface_finish'):
        notes_lines.append(f"{note_num}. SURFACE FINISH: {cfg['surface_finish']} UNLESS NOTED")
        note_num += 1
    
    # Surface treatment
    if cfg.get('surface_treatment'):
        notes_lines.append(f"{note_num}. SURFACE TREATMENT: {cfg['surface_treatment']}")
        note_num += 1
    
    # Standard notes
    notes_lines.append(f"{note_num}. BREAK ALL SHARP EDGES 0.3 MAX")
    note_num += 1
    notes_lines.append(f"{note_num}. ALL DIMENSIONS IN MM")
    note_num += 1
    notes_lines.append(f"{note_num}. THIRD ANGLE PROJECTION")
    
    # Create annotation
    note = doc.addObject('TechDraw::DrawViewAnnotation', 'Notes')
    note.Text = notes_lines
    note.X = 15
    note.Y = 40
    note.TextSize = 2.5
    note.Font = 'osifont'
    page.addView(note)
    
    return note


def add_dfx_notes(doc, page, dfx_items):
    """
    Add DfX notes from cad-review-automation.
    
    Args:
        dfx_items: list of DfX notes/requirements
    """
    if not dfx_items:
        return None
    
    dfx_lines = ['DfX REQUIREMENTS:']
    for item in dfx_items:
        dfx_lines.append(f"• {item}")
    
    dfx_note = doc.addObject('TechDraw::DrawViewAnnotation', 'DfX_Notes')
    dfx_note.Text = dfx_lines
    dfx_note.X = 15
    dfx_note.Y = 70
    dfx_note.TextSize = 2.0
    dfx_note.Font = 'osifont'
    page.addView(dfx_note)
    
    return dfx_note


def update_title_block(page, part_name, cfg):
    """
    Update title block editable texts.
    
    Note: This depends on the SVG template having editable text fields.
    Standard ISO 7200 templates have these fields.
    """
    template = page.Template
    
    # Common editable text field names in ISO templates
    field_mappings = {
        'TITLE': part_name,
        'PART_NAME': part_name,
        'DWG_NO': cfg.get('drawing_number', part_name),
        'SCALE': f"1:{int(1/cfg['scale'])}" if cfg['scale'] != 1 else "1:1",
        'SHEET': '1/1',
        'COMPANY': cfg.get('company', ''),
        'PROJECT': cfg.get('project', ''),
        'DRAWN_BY': cfg.get('drawn_by', ''),
        'APPROVED_BY': cfg.get('approved_by', ''),
        'MATERIAL': cfg.get('material', ''),
        'REVISION': cfg.get('revision', 'A'),
    }
    
    # Try to set editable texts
    if hasattr(template, 'EditableTexts'):
        texts = template.EditableTexts
        for field, value in field_mappings.items():
            if field in texts:
                texts[field] = str(value)
        template.EditableTexts = texts


# ============================================================
# EXPORT FUNCTIONS
# ============================================================

def export_pdf(page, filepath):
    """Export drawing page to PDF."""
    try:
        TechDrawGui.exportPageAsPdf(page, filepath)
        print(f"Exported PDF: {filepath}")
        return True
    except Exception as e:
        print(f"PDF export failed: {e}")
        # Alternative method
        try:
            import importSVG
            svg_temp = filepath.replace('.pdf', '_temp.svg')
            TechDrawGui.exportPageAsSvg(page, svg_temp)
            # Convert SVG to PDF using external tool if available
            print(f"SVG exported (convert to PDF manually): {svg_temp}")
        except:
            pass
        return False


def export_dxf(page, filepath):
    """Export drawing page to DXF."""
    try:
        import importDXF
        importDXF.export([page], filepath)
        print(f"Exported DXF: {filepath}")
        return True
    except Exception as e:
        print(f"DXF export failed: {e}")
        return False


def export_svg(page, filepath):
    """Export drawing page to SVG."""
    try:
        TechDrawGui.exportPageAsSvg(page, filepath)
        print(f"Exported SVG: {filepath}")
        return True
    except Exception as e:
        print(f"SVG export failed: {e}")
        return False


# ============================================================
# CONVENIENCE FUNCTIONS
# ============================================================

def quick_drawing(part_name, material='Al 6061-T6', scale=1.0):
    """
    Quick 2D drawing with minimal configuration.
    
    Example:
        quick_drawing('Body', material='Al 7075-T6')
    """
    config = {
        'material': material,
        'scale': scale,
        'views': {
            'front': True,
            'top': True,
            'right': True,
            'isometric': True,
        },
    }
    return generate_2d_drawing(part_name, config)


def detail_drawing(part_name, config=None):
    """
    Full detail drawing with all annotations.
    """
    full_config = {
        'views': {
            'front': True,
            'top': True,
            'right': True,
            'isometric': True,
            'section': True,
        },
        'auto_dimensions': True,
        'add_notes': True,
    }
    if config:
        full_config.update(config)
    
    return generate_2d_drawing(part_name, full_config)


def assembly_drawing(assembly_name, config=None):
    """
    Assembly drawing with exploded view option.
    """
    asm_config = {
        'views': {
            'front': True,
            'top': False,
            'right': True,
            'isometric': True,
        },
        'auto_dimensions': False,  # Usually not needed for assembly
        'add_notes': True,
    }
    if config:
        asm_config.update(config)
    
    return generate_2d_drawing(assembly_name, asm_config)


# ============================================================
# BATCH PROCESSING
# ============================================================

def generate_drawing_set(parts_list, common_config=None):
    """
    Generate drawings for multiple parts.
    
    Args:
        parts_list: list of part names or dicts with {name, config}
        common_config: config applied to all parts
    
    Returns:
        dict: {part_name: result}
    """
    results = {}
    
    for part in parts_list:
        if isinstance(part, str):
            part_name = part
            part_config = common_config or {}
        else:
            part_name = part['name']
            part_config = common_config.copy() if common_config else {}
            part_config.update(part.get('config', {}))
        
        try:
            result = generate_2d_drawing(part_name, part_config)
            results[part_name] = result
            print(f"✓ Generated drawing for {part_name}")
        except Exception as e:
            results[part_name] = {'error': str(e)}
            print(f"✗ Failed for {part_name}: {e}")
    
    return results


# ============================================================
# EXAMPLE USAGE
# ============================================================

if __name__ == "__main__":
    """
    Example usage - run in FreeCAD Python console:
    
    # Import the module
    exec(open('/path/to/freecad_2d_drawing.py').read())
    
    # Quick drawing
    result = quick_drawing('Body')
    print(result)
    
    # Full drawing with config
    config = {
        'material': 'Al 7075-T6',
        'surface_treatment': 'Anodize Type II, Black',
        'company': 'My Company',
        'project': 'BB-01',
        'drawn_by': 'Engineer Name',
    }
    result = generate_2d_drawing('DT_001_Base', config)
    
    # Batch processing
    parts = ['DT_001', 'DT_002', 'DT_003']
    results = generate_drawing_set(parts, {'material': 'Al 6061-T6'})
    """
    print("FreeCAD 2D Drawing Generator loaded.")
    print("Usage: generate_2d_drawing(part_name, config)")
    print("       quick_drawing(part_name)")
    print("       detail_drawing(part_name)")
