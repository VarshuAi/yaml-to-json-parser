
            window.parseYAML = function() {
                const yaml = document.getElementById('yaml-inp').value;
                const out = document.getElementById('yaml-json-out');
                try {
                    let obj = {};
                    yaml.split('\n').forEach(line => {
                        const parts = line.split(':');
                        if (parts.length === 2) {
                            obj[parts[0].trim()] = parts[1].trim();
                        }
                    });
                    out.value = JSON.stringify(obj, null, 2);
                } catch(e) {
                    out.value = "Error: " + e.message;
                }
            }
            parseYAML();
        