#!/usr/bin/env python3
"""
FreeCAD MCP Helper - Generate FreeCAD Python code for common operations.

Usage:
    python freecad_helper.py box 100 80 50 --name MyBox
    python freecad_helper.py plate 100 80 5 --holes 4 --hole-dia 4.2 --edge-dist 10
    python freecad_helper.py cylinder 20 50 --name Shaft
    python freecad_helper.py enclosure 130 100 50 --wall 3
"""

import argparse
import sys

def generate_box(length, width, height, name="Box"):
    """Generate FreeCAD code for a box."""
    return f'''import FreeCAD as App
import Part

doc = App.ActiveDocument or App.newDocument("{name}")
box = doc.addObject("Part::Box", "{name}")
box.Length = {length}
box.Width = {width}
box.Height = {height}
doc.recompute()
App.ActiveDocument.ActiveView.fitAll()
print(f"Created {name}: {length}x{width}x{height}mm")
'''

def generate_plate_with_holes(length, width, thickness, num_holes, hole_dia, edge_dist, name="MountingPlate"):
    """Generate FreeCAD code for a plate with corner holes."""
    positions = [
        (edge_dist, edge_dist),
        (length - edge_dist, edge_dist),
        (edge_dist, width - edge_dist),
        (length - edge_dist, width - edge_dist)
    ][:num_holes]
    
    hole_code = ""
    for i, (x, y) in enumerate(positions):
        hole_code += f'''
hole{i+1} = doc.addObject("Part::Cylinder", "Hole{i+1}")
hole{i+1}.Radius = {hole_dia/2}
hole{i+1}.Height = {thickness + 2}
hole{i+1}.Placement.Base = App.Vector({x}, {y}, -1)
'''
    
    cut_code = "cut = plate.Shape\n"
    for i in range(len(positions)):
        cut_code += f"cut = cut.cut(hole{i+1}.Shape)\n"
    
    return f'''import FreeCAD as App
import Part

doc = App.ActiveDocument or App.newDocument("{name}")

# Create base plate
plate = doc.addObject("Part::Box", "Plate")
plate.Length = {length}
plate.Width = {width}
plate.Height = {thickness}

# Create holes
{hole_code}

# Boolean cut
{cut_code}

# Create final part
final = doc.addObject("Part::Feature", "{name}")
final.Shape = cut

# Hide construction geometry
plate.Visibility = False
for i in range({len(positions)}):
    doc.getObject(f"Hole{{i+1}}").Visibility = False

doc.recompute()
App.ActiveDocument.ActiveView.fitAll()
print(f"Created {name}: {length}x{width}x{thickness}mm with {len(positions)} holes")
'''

def generate_cylinder(radius, height, name="Cylinder"):
    """Generate FreeCAD code for a cylinder."""
    return f'''import FreeCAD as App
import Part

doc = App.ActiveDocument or App.newDocument("{name}")
cyl = doc.addObject("Part::Cylinder", "{name}")
cyl.Radius = {radius}
cyl.Height = {height}
doc.recompute()
App.ActiveDocument.ActiveView.fitAll()
print(f"Created {name}: R{radius}mm x H{height}mm")
'''

def generate_enclosure(length, width, height, wall, name="Enclosure"):
    """Generate FreeCAD code for an open-top enclosure."""
    inner_l = length - 2 * wall
    inner_w = width - 2 * wall
    inner_h = height - wall
    
    return f'''import FreeCAD as App
import Part

doc = App.ActiveDocument or App.newDocument("{name}")

# Outer box
outer = doc.addObject("Part::Box", "Outer")
outer.Length = {length}
outer.Width = {width}
outer.Height = {height}

# Inner cutout
inner = doc.addObject("Part::Box", "Inner")
inner.Length = {inner_l}
inner.Width = {inner_w}
inner.Height = {inner_h + 1}
inner.Placement.Base = App.Vector({wall}, {wall}, {wall})

# Boolean cut
cut = doc.addObject("Part::Cut", "Cut")
cut.Base = outer
cut.Tool = inner

# Create final part
final = doc.addObject("Part::Feature", "{name}")
final.Shape = cut.Shape

# Hide construction
outer.Visibility = False
inner.Visibility = False
cut.Visibility = False

doc.recompute()
App.ActiveDocument.ActiveView.fitAll()
print(f"Created {name}: {length}x{width}x{height}mm, wall={wall}mm")
'''

def main():
    parser = argparse.ArgumentParser(description="Generate FreeCAD Python code")
    subparsers = parser.add_subparsers(dest="command", help="Part type")
    
    # Box
    box_parser = subparsers.add_parser("box", help="Create a box")
    box_parser.add_argument("length", type=float)
    box_parser.add_argument("width", type=float)
    box_parser.add_argument("height", type=float)
    box_parser.add_argument("--name", default="Box")
    
    # Plate with holes
    plate_parser = subparsers.add_parser("plate", help="Create plate with holes")
    plate_parser.add_argument("length", type=float)
    plate_parser.add_argument("width", type=float)
    plate_parser.add_argument("thickness", type=float)
    plate_parser.add_argument("--holes", type=int, default=4)
    plate_parser.add_argument("--hole-dia", type=float, default=4.2)
    plate_parser.add_argument("--edge-dist", type=float, default=10)
    plate_parser.add_argument("--name", default="MountingPlate")
    
    # Cylinder
    cyl_parser = subparsers.add_parser("cylinder", help="Create a cylinder")
    cyl_parser.add_argument("radius", type=float)
    cyl_parser.add_argument("height", type=float)
    cyl_parser.add_argument("--name", default="Cylinder")
    
    # Enclosure
    enc_parser = subparsers.add_parser("enclosure", help="Create open-top enclosure")
    enc_parser.add_argument("length", type=float)
    enc_parser.add_argument("width", type=float)
    enc_parser.add_argument("height", type=float)
    enc_parser.add_argument("--wall", type=float, default=3)
    enc_parser.add_argument("--name", default="Enclosure")
    
    args = parser.parse_args()
    
    if args.command == "box":
        print(generate_box(args.length, args.width, args.height, args.name))
    elif args.command == "plate":
        print(generate_plate_with_holes(
            args.length, args.width, args.thickness,
            args.holes, args.hole_dia, args.edge_dist, args.name
        ))
    elif args.command == "cylinder":
        print(generate_cylinder(args.radius, args.height, args.name))
    elif args.command == "enclosure":
        print(generate_enclosure(args.length, args.width, args.height, args.wall, args.name))
    else:
        parser.print_help()
        sys.exit(1)

if __name__ == "__main__":
    main()
