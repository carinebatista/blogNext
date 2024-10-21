

export default function formatDate(dateString) {
	const date = new Date(dateString);
	
	const formattedDate = date.toLocaleDateString('en-US', {
	  month: 'short', 
	  day: '2-digit',
	  year: 'numeric' 
	});
  
	return formattedDate;
  }