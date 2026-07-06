class RotateNorthControl extends ol.control.Control {
            constructor(opt_options) {
                const options = opt_options || {};
                const button = document.createElement('button');
                button.innerHTML = 'N';
                button.title = 'Rotate North';
                const element = document.createElement('div');
                element.className = 'rotate-north custom-control ol-unselectable ol-control';
                element.appendChild(button);
                super({ element: element, target: options.target });
                button.addEventListener('click', this.handleRotateNorth.bind(this), false);
            }
            handleRotateNorth() {
                this.getMap().getView().setRotation(0);
            }
        }

        const map = new ol.Map({
            controls: ol.control.defaults.defaults().extend([new RotateNorthControl()]),
            target: 'map',
            layers: [ new ol.layer.Tile({ source: new ol.source.OSM() }) ],
            view: new ol.View({ center: [0, 0], zoom: 3, rotation: Math.PI / 4 }) // Starts rotated
        });