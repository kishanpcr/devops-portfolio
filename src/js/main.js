// Display build information
document.addEventListener('DOMContentLoaded', function() {
    const buildInfo = document.getElementById('build-info');
    const deployTime = new Date().toLocaleString();
    
    buildInfo.innerHTML = `
        <strong>Deployment Info:</strong><br>
        Build Time: ${deployTime}<br>
        Version: 1.0.0
    `;
});