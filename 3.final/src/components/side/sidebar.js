export default function SideBar() {
    function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
    
    return (
        <div>
            <div class="w3-sidebar w3-bar-block w3-collapse w3-card" id="mySidebar">
                <button class="w3-bar-item w3-button w3-hide-large"
                    onclick={w3_close()}>Close &times;</button>
                <a href="df" class="w3-bar-item w3-button">Link 1</a>
                <a href="d" class="w3-bar-item w3-button">Link 2</a>
                <a href="r" class="w3-bar-item w3-button">Link 3</a>
            </div>

            <div class="w3-main" >

                <div class="w3-teal">
                    <button class="w3-button w3-teal w3-xlarge" onclick={w3_open()}>&#9776;</button>
                    <div class="w3-container">
                        <h1>My Page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
