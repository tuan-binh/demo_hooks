import { useState } from 'react';

function Radio() {
  const [gender, setGender] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  return (
    <div>
      <h2>Giới tính: {gender}</h2>
      <div>
        <input type="radio" name="gender" id="male" value="Nam" onChange={handleChange} />
        <label htmlFor="male">Nam</label> <br />
        <input type="radio" name="gender" id="female" value="Nữ" onChange={handleChange} />
        <label htmlFor="female">Nữ</label> <br />
        <input type="radio" name="gender" id="other" value="LGBT" onChange={handleChange} />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  );
}

export default Radio;
