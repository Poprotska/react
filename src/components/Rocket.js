export default function Rocket({model}) {
    return (
        <div>
            {model.mission_name} -{model.launch_year}
            <img src={model.links.mission_patch} alt="mission_patch"/>
        </div>
    );
}