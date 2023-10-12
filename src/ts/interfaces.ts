export interface AudioClip {
	keyTrigger: string;
	url: string;
	description: string;
}

export interface DrumProps {
	audioClip: AudioClip;
}
