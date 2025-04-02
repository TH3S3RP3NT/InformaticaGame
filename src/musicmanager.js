class MusicPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.currentTrackIndex = 0;

        // Set up the onended callback for the first track
        if (this.tracks.length > 0) {
            this.tracks[this.currentTrackIndex].onended(() => this.playNextTrack());
        }
    }

    playTrack(index) {
        if (this.tracks[this.currentTrackIndex]) {
            this.tracks[this.currentTrackIndex].stop(); // Stop the current track
        }

        this.currentTrackIndex = index;

        if (this.currentTrackIndex >= this.tracks.length) {
            this.currentTrackIndex = 0; // Loop back to the first track
        }

        this.tracks[this.currentTrackIndex].play(); // Play the new track
    }

    playNextTrack() {
        this.playTrack(this.currentTrackIndex + 1); // Play the next track
    }
}