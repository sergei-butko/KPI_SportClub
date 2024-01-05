import React from 'react';
import { visitDto } from '@/types/dto/visitDto';
import ReactCalendar from 'react-calendar';
import './styles/react-calendar-custom.css'

function Calendar(props: { visits: visitDto[], callback?: (date: Date)=>void }) {
    const markedDates: Date[] = props.visits.map((visitDate) => {
        const date = new Date(visitDate.date);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    });

    const tileClassName = ({ date }: { date: Date }): string | null => {
        const isMarked = markedDates.some((markedDate) => isSameDay(date, markedDate));

        return isMarked ? 'bg-indigo-300 rounded-2xl' : null;
    };

    const isSameDay = (date1: Date, date2: Date): boolean => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    return (
        <ReactCalendar tileClassName={tileClassName} onClickDay={props.callback}/>
    );
}

export default Calendar;
