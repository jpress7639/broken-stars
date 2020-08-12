import React, {useState, useEffect} from "react"
import { readAllSymptoms } from "../../../services/symptoms"


export default function HandleSymptoms(props) {
    return(
        <div>
        <h3>{props.artist.name}'s Symptoms</h3>
        {/* {props.artist.symptoms.map((symptom) => (
            <p>{symptom.name}</p>
        ))} */}
        </div>
    )
}