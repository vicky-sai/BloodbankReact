import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../Content/Content.react';
import SecondContent from '../SecondContent/SecondContent.react';
import ThirdContent from '../ThirdContent/ThirdContent.react';
import FourthContent from '../FourthContent/FourthContent.react';

const Navigation = () => {

    return (
        <div >
            <main>
                <Switch>
                    <Route exact path='/' component={Content}></Route>
                    <Route path='/two' component={SecondContent}></Route>
                    <Route path='/three' component={ThirdContent}></Route>
                    <Route path='/four' component={FourthContent}></Route>
                </Switch>
            </main>
        </div>
    );

}

export default Navigation;