let selectedSeats = [];

function setSeatAvailability() {
  const rollNumber = document.getElementById("rollNumber").value;
  const isEvenRollNumber = rollNumber % 2 === 0;

  const seats = document.querySelectorAll('.seat');
  selectedSeats = [];
  seats.forEach(seat => {
    seat.classList.remove('unavailable');
    seat.classList.remove('selected');
    seat.removeEventListener('click', selectSeat);
  });

  seats.forEach(seat => {
    const seatNumber = parseInt(seat.textContent);

    if ((isEvenRollNumber && seatNumber % 2 === 0) || (!isEvenRollNumber && seatNumber % 2 !== 0)) {
      seat.addEventListener('click', selectSeat);
    } else {
      seat.classList.add('unavailable');
    }
  });

  document.getElementById('doneBtn').style.display = 'block';
}

function selectSeat() {
  this.classList.toggle('selected');

  const seatNumber = this.textContent;

  if (this.classList.contains('selected')) {
    selectedSeats.push(seatNumber);
    alert(`Seat ${seatNumber} selected.`);
  } else {
    selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
  }
}

function doneSelecting() {
  if (selectedSeats.length > 0) {
    alert(`You have selected the following seats: ${selectedSeats.join(', ')}`);
  } else {
    alert("No seats selected.");
  }
}
