


function init() {
    // console.log("Init Here")
    $("nav a").click(function(event){
        let buttonId = this.id;
        let contentId = buttonId + "Content";
        console.log(contentId);

        // $("#page-one").html(eval(contentID));

        MODEL.getPageContent(contentId);
    });

    
}

$(document).ready(function() {
    MODEL.getPageContent("homeContent");
    init();
})


