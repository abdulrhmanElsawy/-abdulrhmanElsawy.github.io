$(document).ready(function() {
    var user_image = $(".user-image").attr("src");
    var trip_images_count = $("#trips_images").children('img').length;
    $("#edit_trips").click(function() {
        $(".pop-ups").css("display", "block")
    })

    $("#close_edittrips_button").click(function() {
        $(".pop-ups").css("display", "none");
    })

    $(".profile-settings img").click(function() {
        $(".profile-settings-dropdown ul").fadeToggle(500);
    })
    $(".profile-settings i").click(function() {
        $(".profile-settings-dropdown ul").fadeToggle(500);
    })

    $("#edit-profile-photo").click(function() {
        $(".pop-ups-2").fadeIn(500);

        // take the profile image and put it in the pop up
        $(".editable-photo").attr("src", user_image);
    })
    $(".close-edit-photo-popup").click(function() {
        $(".pop-ups-2").fadeOut(500);
    })

    // when Click On THE button the input of edititng photo will run

    $("#for-edit-photo-input").click(function() {
        $("#edit-profile-photo-input").click();
    })
});