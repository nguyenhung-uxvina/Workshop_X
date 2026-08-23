import json,re
def load(p):
    """NLM stream có thể trả nhiều object JSON nối nhau + văn bản trần lẫn vào.
    Ghép mọi 'answer' theo thứ tự; nếu không có object nào thì vớt văn bản trần."""
    raw=open(p,encoding='utf-8',errors='replace').read()
    dec=json.JSONDecoder(); i=0; parts=[]; meta={'sources_used':[],'references':[]}
    while i<len(raw):
        j=raw.find('{',i)
        if j<0: break
        try:
            o,end=dec.raw_decode(raw,j)
        except ValueError:
            i=j+1; continue
        o=o.get('result',o) if isinstance(o,dict) else o
        if isinstance(o,dict):
            if o.get('status')=='error': parts.append('[LỖI] '+str(o.get('error'))[:200])
            if o.get('answer'): parts.append(o['answer'])
            for k in ('sources_used','references'):
                if o.get(k): meta[k]+=o[k]
        i=end
    txt='\n'.join(parts)
    if len(txt)<500:
        txt=re.sub(r'\{[^{}]*\}','',raw).strip() or txt
    return txt,meta
