import React, { useEffect, useState } from 'react';

function IDFormComponent({ data }) {
  const [id, setId] = useState('no results');
  const [name, setName] = useState('no results');
  const [birth, setBirth] = useState('no results');
  const [gender, setGender] = useState('no results');
  const [address, setAddress] = useState('no results');
  const [date, setDate] = useState('no results');

  // Sử dụng useEffect để cập nhật trạng thái khi props `data` thay đổi
  useEffect(() => {
    if (data) {
      setId(data.id || 'no results');
      setName(data.name || 'no results');
      setBirth(data.birth || 'no results');
      setGender(data.gender || 'no results');
      setAddress(data.address || 'no results');
      setDate(data.date || 'no results');
    }
  }, [data]);
  return (
    <div className="form-container">
      <form>
        <label htmlFor="id">ID Number:</label>
        <input
          id="id"
          name="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Birthday:</label>
        <input
          id="birth"
          name="birth"
          type="text"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        <label>Gender:</label>
        <input
          id="gender"
          name="gender"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Date Of ID:</label>
        <input
          id="date"
          name="date"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </form>
    </div>
  );
  //   return <div>{JSON.stringify(children)}</div>;
}

export default IDFormComponent;
