// here we can customize and play a bit with the settings of the yt video embed such as choosing if the toolbar to pause is visible etc
// Load YouTube IFrame API dynamically
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '315',
        width: '560',
        videoId: 'CItuE6T9zDQ', // Replace with your video ID
        playerVars: {
            'autoplay': 1,   // 1 = Autoplay on, 0 = Off
            'controls': 1,   // 1 = Show controls, 0 = Hide
            'rel': 0,        // No related videos at the end
            'modestbranding': 1, // Minimal YouTube branding
            'playsinline': 1, // Allows inline playback on mobile
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    let slidesFrame = document.getElementById("slides-frame");

    if (!slidesFrame) {
        console.error("Slides iframe not found!");
        return;
    }

    let originalSrc = slidesFrame.src; // Default URL without autoplay
    let autoplaySrc = originalSrc.replace("start=false", "start=true"); // URL with autoplay
    let autoplayActivated = false; // Flag to check if autoplay has started

    slidesFrame.addEventListener("mouseenter", function() {
        if (!autoplayActivated) { // Only activate autoplay once
            slidesFrame.src = autoplaySrc;
            autoplayActivated = true; // Set flag to prevent resetting
        }
    });
});

// Function to customize video settings (quality, playback speed, etc.)
function onPlayerReady(event) {
    console.log("Player is ready!");

    // Set video playback speed (Change value: 0.25, 0.5, 1, 1.5, 2)
    player.setPlaybackRate(1);

    // Set video volume (0 to 100)
    player.setVolume(100);

    // Try setting quality (Change 'hd720' if needed)
    let availableQualities = player.getAvailableQualityLevels();
    console.log("Available qualities:", availableQualities);
    if (availableQualities.includes("hd720")) {
        player.setPlaybackQuality("hd720");
    }
}


document.addEventListener("DOMContentLoaded", function() { // click aniamtion
    const button = document.querySelector(".interest-button");

    button.addEventListener("click", function() {
        button.classList.add("clicked"); // Add animation class
        setTimeout(() => {
            button.classList.remove("clicked"); // Remove after animation
        }, 300); // Keep effect for 300ms
    });
});
