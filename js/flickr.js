

    var tagSearch = function(tag){

        var request = {tags: tag};
        $.ajax({    
                url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                data: request,
                dataType: "json",
                type: "GET"
            })
            .done(function(data){
            var Display = $(".column-25").clone();
            $.each(data.items, function(i, photo){
            Display.photos.attr("href", photo.media.m);
            Display.photos.attr("src", photo.link);
            });
        })
            .fail(function(error){
            $(".photos").text("Sorry but we couldnt find any results.");
        });
    };

$(document).ready(function(){
    
    $('.tagSubmit').submit(function(event){
        $('.column-column-25').empty();
        var tag = $(this).find("input[name='search']").val();
         $('#search').val('');
        tagSearch(tag);
       
    });
});