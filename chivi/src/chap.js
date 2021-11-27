function execute(url) {
    url = url.replace("chivi.xyz", "chivi.app");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("h1").remove();
        let cvData = [];
        Html.parse(Html.clean(doc.select("article cv-data").outerHtml(), ["cv-data", "em"]))
            .select("cv-data")
            .forEach(e => cvData.push(e.html()));
        let htm = cvData.join("<br>");
        return Response.success(htm);
    }
    return null;
}