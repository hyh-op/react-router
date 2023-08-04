import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: React.FC = (): JSX.Element => {
    return (
        <div>
            MainLayout
            <br />
            <Outlet />
            {/* outlet ：嵌套路由，可以保证子路由共享父路由的界面而不会覆盖。
            为此React提供了Outlet组件，将其用于父组件中可以为子路由的元素占位，
            并最终渲染子路由的元素。 */}

            <>
                点击连接跳转的部份如下：
                {/* nav语义标签 */}
                <nav>
                    <ul>
                        <li><Link to='/'>Main Page</Link></li>
                        <li><Link to='/account/add'>Add Account</Link></li>
                        <li><Link to='/account/list'>List Accounts</Link></li>
                        <li><Link to='/account/1'>View Account</Link></li>
                        <li><Link to='/something-else'>Not Found</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </>
        </div>
    );
};

export default MainLayout;