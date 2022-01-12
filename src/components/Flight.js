export default function Flight({item}) {
    return (
        <div>

            {item.mission_name} - {item.launch_year}
            <img src={item.links.mission_patch} alt="mission_patchy"/>
        </div>
    );
}