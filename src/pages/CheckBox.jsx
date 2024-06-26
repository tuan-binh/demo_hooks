import { useState } from 'react';

function CheckBox() {
  const [hobby, setHobby] = useState([]);

  const handleChange = (e) => {
    console.dir(e.target);
    let newHobby = [...hobby];
    if (e.target.checked) {
      newHobby.push(e.target.value);
    } else {
      newHobby.splice(newHobby.indexOf(e.target.value), 1);
    }
    setHobby(newHobby);
  };

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div>
      <h2>Hobby: {hobby.join(', ')}</h2>
      <div>
        <input type="checkbox" name="hobby" id="play" value="Đi Chơi" onChange={handleChange} />
        <label htmlFor="play">Đi chơi</label> <br />
        <input type="checkbox" name="hobby" id="code" value="Code" onChange={handleChange} />
        <label htmlFor="code">Code</label> <br />
        <input type="checkbox" name="hobby" id="swim" value="Bơi lội" onChange={handleChange} />
        <label htmlFor="swim">Bơi lội</label> <br />
        <input type="checkbox" name="hobby" id="nhayday" value="Nhảy dây" onChange={handleChange} />
        <label htmlFor="nhayday">Nhẩy dây</label> <br />
      </div>
    </div>
    // </div>
  );
}

export default CheckBox;
