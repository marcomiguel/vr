var vrView;
        function onLoad() {
            console.log('onLoad');
            vrView = new VRView.Player('#vrview', {
                width: '100%',
                height: 480,
                image: 'blank.png',
                is_stereo: false,
                is_autopan_off: true
            });

            vrView.on('ready', onVRViewReady);
            vrView.on('modechange', onModeChange);
            vrView.on('getposition', onGetPosition);
            vrView.on('error', onVRViewError);

        }

        function loadScene() {
            console.log('loadScene');
            vrView.setContent({
                image: 'machu-picchu.jpg',
                preview: 'machu-picchu-preview.jpg',
                is_autopan_off: true
            });
            vrView.getPosition();
        }

        function onVRViewReady(e) {
            console.log('onVRViewReady');
            loadScene();
        }

        function onModeChange(e) {
            console.log('onModeChange', e.mode);
        }

        function onVRViewError(e) {
            console.log('Error! %s', e.message);
        }

        function onGetPosition(e) {
            console.log(e)
        }

        window.addEventListener('load', onLoad);