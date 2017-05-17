var uploadPhotoState = {
    takingPicture: true,
    imageUri: ""
}

export function takePicture(param) {
    uploadPhotoState.takingPicture = true;

    let options = {
        'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT, // default is THEME_TRADITIONAL
        'title': (param == "avatar") ? 'Upload profile picture' : "Upload cover",
        'buttonLabels': ['From Camera', 'From Gallery'],
        'androidEnableCancelButton': true, // default false
        'addCancelButtonWithLabel': 'Cancel',
    };

    let callback = function(buttonIndex) {

        var sourceType;

        switch (buttonIndex) {
            case 1:
                sourceType = Camera.PictureSourceType.CAMERA;
                break;
            case 2:
                sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
                break;
            default:
                return false;
        }

        navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback, {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            targetWidth: 400,
            targetHeight: 400,
            cameraDirection: (param == "avatar") ? Camera.Direction.FRONT : Camera.Direction.BACK
        });
    }

    window.plugins.actionsheet.show(options, callback);
}

function cameraSuccessCallback(imageUri) {
    // on success
    uploadPhotoState = {
        takingPicture: false,
        imageUri: imageUri
    }
    $('img#avatar').attr('src', ('data:image/jpeg;base64,' + imageUri));
    console.log(imageUri);
}

function cameraFailureCallback(error) {
    uploadPhotoState.takingPicture = false
    console.log(error)
}
