import {useParams, Link} from "react-router-dom";
import { data } from "../../data/data";
import { useEffect } from "react";



export default function ProjectDetails(){
    const params = useParams();
    console.log(params);

    const project = data.find(p=> p.id == params.id);
    //console.log(project);

    //api example
    useEffect(()=> {
        const fetchProject =(id) => {
            console.log(`fetching id ${id}...`)
        }
        fetchProject(params.id)
    }, [params.id]);

    return (
        <div>
            <h1>Project Details Page</h1>
            <Link to ='/projects'>back</Link>
            
            <h2>{project.name}</h2>
            <h3>Status{project.status}</h3>
            <p>{project.description}</p>
            <div>Start date: {project.start_date}</div>
            <div>End date: {project.end_date}</div>
            <div>Team ID: #{project.team_id}</div>
        </div>
    );
}