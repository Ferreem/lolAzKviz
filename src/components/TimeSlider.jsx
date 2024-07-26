

function TimeSlider({ timeLeft, duration }) {
    const progress = ((duration - timeLeft) / duration) * 100;

    return (
        <div className="w-full h-2 rounded-full overflow-hidden" style={{    backgroundColor: 'rgba(18, 19, 18, 0.749)',
            backdropFilter: 'blur(8px) saturate(150%)'}}>
            <div 
                className="h-full bg-white transition-all duration-1000 ease-linear"
                style={{ width: `${100 - progress}%` }}
            ></div>
        </div>
    );
}

export default TimeSlider;