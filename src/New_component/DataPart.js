import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Head,Head2} from '../New_component/Head.module';
import  classes from './Datapart.module.css'
import Navbar from './Navbar.module'

function Datapart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=1000')
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results,"*******************")
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <Navbar />
    <div className={classes.mainsection}>
      <span className={classes.user_deatail}>User Deatails</span>
      <section className={classes.sec1}>
        <div className={classes.head}>
          <Head />
        </div>
          <div className={classes.table}>
              <table >
                <tbody>
                  {data.map(item => (
                    <tr >
                      <td className={classes.list}>{item.name.first}</td>
                      <td className={classes.list}>{item.name.last}</td>
                      <td className={classes.list}>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </section>

      <section className={classes.sec2}>
        <div className={classes.head}>
          <Head2 />
        </div>
          <div className={classes.table}>
              <table >
                <tbody>
                  {data.map(item => (
                    <tr >
                      <td className={classes.list}>{item.location.city}</td>
                      <td className={classes.list}>{item.location.state}</td>
                      <td className={classes.list}>{item.location.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </section>
    </div>
    </>
  );
}

export default Datapart;