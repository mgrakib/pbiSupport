let userInfo = [];

const creatTicket = () => {
    const nowDate = new Date();
	const projectName = getELement("projectName").value;
	const priority = getELement("priority").value;
	const ticketSubject = getELement("ticketSubject").value;
	const ticketDescription = getELement("ticketDescription").value;
    const ticketIssueTime = nowDate.toLocaleDateString();
	const organizationName = "Police Bureau of Investigation";
	const userId = Object.keys(userInfo[0])[0];
	const userName = userInfo[0][userId].userFullName;

	let countTic = 0;
	let creatTicketToLocalStorage = getLocalStorageValue("ticket");
	if (creatTicketToLocalStorage) {
		countTic = creatTicketToLocalStorage.length + 1;
	} else {
		countTic = 1;
	}
	
    const ticketObject = {
        countTic,
		userId,
		userName,
		projectName,
		priority,
		ticketSubject,
		ticketDescription,
		ticketIssueTime,
        organizationName,
		status: 'Open'
    };
    
    

    if (creatTicketToLocalStorage) {
       localStorage.setItem(
			"ticket",
			JSON.stringify([ticketObject, ...creatTicketToLocalStorage ])
		);
        
     
    } else {
        setLocalStorageValue("ticket", [ticketObject]);
	}
	
	getELement("projectName").value = "Choose";
	getELement("priority").selectedIndex = 0;
	getELement("ticketSubject").value = '';
	getELement("ticketDescription").value = '';


	const allTickets = getLocalStorageValue("ticket");
	let number = 1;
	let changeCountIf = allTickets.map(ticket => {
		ticket.countTic = number;
		number++;
		return ticket;
	}
		
	);
	// console.log(changeCountIf);
	setLocalStorageValue("ticket", changeCountIf);
	


	
	location.href = "../dashboard.html";
}