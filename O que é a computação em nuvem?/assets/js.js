document.addEventListener('DOMContentLoaded', function() {
    function setupButton(buttonId, targetUrl) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                window.location.href = targetUrl;
            });
        }
    }
    setupButton('btnIaaS', './IaaS.html');
    setupButton('btnPaaS', './PaaS.html');
    setupButton('btnSaaS', './SaaS.html');
    setupButton('btnVoltarInicio', './index.html'); 
    setupButton('btnContato', './contato_html.html'); 
});