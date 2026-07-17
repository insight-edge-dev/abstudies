import useCountUp from '../../hooks/useCountUp.js';

function StatCard({ value, label, detail, backgroundClass }) {
  const { elementRef, value: displayedValue } = useCountUp(value);

  return (
    <div className="col-3 px-0">
      <div className={`${backgroundClass} text-center p-4`}>
        <h1 ref={elementRef} className="text-white" data-toggle="counter-up">
          {displayedValue}
        </h1>
        <h6 className="text-uppercase text-white">
          {label}
          <span className="d-block">{detail}</span>
        </h6>
      </div>
    </div>
  );
}

export default StatCard;
