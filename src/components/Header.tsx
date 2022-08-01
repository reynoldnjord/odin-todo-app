import React from "react";

const Header = (props: { projectName: string }) => {
	return <div className="header">
        {props.projectName}
        </div>;
};

export default Header;
