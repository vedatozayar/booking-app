import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem';
import './list.css';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input
                type='text'
                className='lsInputCity'
                placeholder={destination}
                alt=''
              />
            </div>
            <div className='lsItem'>
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'dd/MM/yyyy'
              )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Min Price <small>(per night)</small>{' '}
                </span>
                <input type='number' className='lsOptionInput' min={0} />
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Max Price <small>(per night)</small>{' '}
                </span>
                <input type='number' className='lsOptionInput' min={0} />
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Adult</span>
                <input
                  type='number'
                  className='lsOptionInput'
                  placeholder={options.adult}
                  min={1}
                />
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>children </span>
                <input
                  type='number'
                  className='lsOptionInput'
                  placeholder={options.children}
                  min={0}
                />
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Room</span>
                <input
                  type='number'
                  className='lsOptionInput'
                  placeholder={options.room}
                  min={1}
                />
              </div>
            </div>
            <button className='lsButton'>Search</button>
          </div>
          <div className='listResult'>
            <div className='listResult'>
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
