
import PropTypes from "prop-types"

export default function PropTypesUsage({name,age,hobbies,details}) {

    return(

        <div>

           <h1> Prop Types Usage :</h1>
           <hr />
           
           Name : {name}
           <hr />

           Age : {age}
           <hr />

          <b>Hobies : </b> { hobbies.map(hobbie => hobbie+" ")}
          <hr />

          <b>Details:</b> School : {details.school} - City : {details.city}

        </div>

    )
}

PropTypesUsage.propTypes = {  // Alerts at developer console if types and conditions does not match !!!
    name :PropTypes.string.isRequired,
    age : PropTypes.oneOfType([PropTypes.number,PropTypes.string,PropTypes.bool]),
    hobbies : PropTypes.array,
    details : PropTypes.shape({school:PropTypes.string, city : PropTypes.string})

}

PropTypesUsage.defaultProps = {
    name : "defaultName",
    age : 0,
}