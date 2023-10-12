import { AudioClip, DrumProps } from '../ts/interfaces';

const Drum = ({ audioClip }: DrumProps) => {
	const playSound = (clip: AudioClip) => {
		(document.getElementById(clip.keyTrigger) as HTMLAudioElement)
			.play()
			.catch(console.error);
	};

	return (
		<button
			className='drum-pad'
			id={`drum-${audioClip.keyTrigger}`}
			onClick={() => playSound(audioClip)}
		>
			<audio src={audioClip.url} id={audioClip.keyTrigger} className='clip' />
			{audioClip.keyTrigger}
		</button>
	);
};

export default Drum;
