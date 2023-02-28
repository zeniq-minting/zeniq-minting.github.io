let links = document.querySelectorAll("a");
  const hostname = 'safir.'+ window.location.hostname.split('safir.')?.[1] ?? 'com'; //e.g -> safir.com or safir.cc
for (const l of links) {
    if(l.href.includes((window.location.hash || '').substr(1)))
        continue;
    l.href = l.href.split('zeniq.com').join(hostname);
    l.href = l.href.split('safir.com').join(hostname);
    l.href = l.href.split('terms-and-conditions').join('general-terms-conditions');
    l.href = l.href.split('privacypolicy').join('privacy-policy');
    l.href = l.href.split('general-terms-conditions/').join('assets/files/website-terms-and-conditions-01-10-2022.pdf');
    l.href = l.href.split('privacy-policy/').join('assets/files/website-privacy-policy-01-10-2022.pdf');
    if (l.href === `https://${hostname}/` || l.href === `http://${hostname}/`)
        l.href = `https://${hostname}/ref/` + (window.location.hash || '').substr(1);
    else
        l.href += window.location.hash;
}
function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/Safir global/g, "SAFIR GROUP INTERNATIONAL LTD.");
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);
