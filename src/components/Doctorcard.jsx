

function Doctorcard({name,gender,specialization}) {
  return (
    <div>
        <div>
            <img src="https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg" alt="" />
        </div>
        <h3>{name}</h3>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>View details</button>
    </div>
  )
}

export default Doctorcard