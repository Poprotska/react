export default function Rocket({model}) {
    return (
        <div className="container">
            <div className="text">
                <div className="name">{model.mission_name}</div>
                <div className="year">{model.launch_year}</div>
            </div>
            <img src={model.links.mission_patch} alt="mission_patch"/>
        </div>
    );
}