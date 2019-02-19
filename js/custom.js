i=100;
        function collapse() {
            var obj = document.getElementById("logotip");
            function update() {
                if (i>-1) {
                    obj.style.flexBasis=i+"%";
                    i = i-1;
                }
            }

            setInterval(update,10000);
        }