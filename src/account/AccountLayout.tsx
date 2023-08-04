import React from "react";
import { Outlet } from "react-router-dom";

const AccountLayout: React.FC = (): JSX.Element => {
    return (
        <div>
            AccountLayout
            <br />
            {/* children 里的子路由会通过Outlet 组件显示出来。 */}
            <Outlet />
        </div>
    );
};

export default AccountLayout;
