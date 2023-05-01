import moment from "moment";

const StaffShift = (shift) => {
  const {
    workType,
    startHours,
    startMinutes,
    startAMPM,
    endHours,
    endMinutes,
    endAMPM,
  } = Object.values(shift)[0];

  const startTime = startHours + startMinutes + startAMPM.toLowerCase();
  const endTime = endHours + endMinutes + endAMPM.toLowerCase();
  const formattedStartTime = moment(startTime, "hmm a").format("hh:mm a");
  const formattedEndTime = moment(endTime, "hmm a").format("hh:mm a");
  const duration = moment(endTime, "hmm a").diff(
    moment(startTime, "hmm a"),
    "hours",
    true
  );

  return (
    <div>
      <p>{workType}</p>
      <p>
        {formattedStartTime} - {formattedEndTime}
      </p>
      <p>{duration} hours</p>
      <button>edit</button>
      {/* TODO 
      implement feature to edit exisiting shift */}
    </div>
  );
};

export default StaffShift;
