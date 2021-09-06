import { getPermission } from 'components/firebase/fIndex';
import React, { useState } from 'react';

const AskPermission = ({ setIsLicensed }) => {
  const [permissionCode, setPermissionCode] = useState('');
  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === 'permissionCode') {
      setPermissionCode(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const state = await getPermission(permissionCode);
    state ? setIsLicensed(true) : alert('잘못된 코드입니다.');
  };
  return (
    <React.Fragment>
      <div className="permission-container">
        <form className="permission-wrapper" onSubmit={onSubmit}>
          <input
            type="text"
            name="permissionCode"
            placeholder="Enter Permission Code"
            onChange={onChange}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default AskPermission;
