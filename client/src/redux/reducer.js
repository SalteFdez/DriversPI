const initialState = {
    drivers: [],
    teams: [],
    allDrivers: [],
    currentPage: 1,
    driversPerPage: 9,
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};

        case "SETPAGE":
            return {
                ...state,
                currentPage: action.payload
            }

        case "FILTERBYNAME":
            if (action.payload === "") return {
                ...state,
                drivers: state.allDrivers
            }

            const filteredDrivers = state.allDrivers.filter((driver) => {
                if (typeof driver.name === 'object' && driver.name !== null) {
                  return (
                    (driver.name.forename && driver.name.forename.toLowerCase() === action.payload.toLowerCase()) ||
                    (driver.name.surname && driver.name.surname.toLowerCase() === action.payload.toLowerCase())
                  );
                } else if (typeof driver.name === 'string') {
                  return (
                    (driver.name.toLowerCase() === action.payload.toLowerCase()) ||
                    (driver.lastName && driver.lastName.toLowerCase() === action.payload.toLowerCase())
                  );
                }
              });
              

            return {
                ...state,
                drivers: filteredDrivers
            }

        case "SETALLDRIVERS":
            return {
            ...state,
            allDrivers: action.payload,
            drivers: action.payload
            };

        case "FILTERBYTEAM":
            if (action.payload === "All") {
                return {
                    ...state,
                    drivers: state.allDrivers
                };
            }
        
            const teamFilter = state.allDrivers.filter((driver) => {
                if (driver.teams) {
                    const teamsArray = (driver.teams && driver.teams.split(',')) || [];
                    return teamsArray.some((team) => team.trim() === action.payload);
                } else if (driver.Teams) {
                    return driver.Teams.some((team) => team.name.toLowerCase() === action.payload.toLowerCase());
                }
                return false; 
            });
        
            return {
                ...state,
                drivers: teamFilter
            };
            

        case "ORDER":
            const orderCopy = [...state.drivers];
            
            orderCopy.sort((a, b) => {
                if (typeof a.name === "object") {
                    var nameA = (a.name && a.name.forename) || "";
                } else {
                    var nameA = (a.name)
                }  
                if (typeof b.name === "object") {
                    var nameB = (b.name && b.name.forename) || "";
                } else {
                    var nameB = (b.name)
                }
                
                const dobA = a.dob || a.bornDate || "";
                const dobB = b.dob || b.bornDate || "";
                
                
            
                if (action.payload === "aNombre") return nameA.localeCompare(nameB);
                if (action.payload === "dNombre") return nameB.localeCompare(nameA);
                if (action.payload === "aNacimiento") return dobA.localeCompare(dobB);
                if (action.payload === "dNacimiento") return dobB.localeCompare(dobA);
            
                return 0;
            });
            
            return {
                ...state,
                drivers: orderCopy
            };
        
        case "ORIGIN":
            let filterDrivers;
            if (action.payload === "all") return {...state,drivers:state.allDrivers}
            if (action.payload === "DB") {
                filterDrivers = state.allDrivers.filter(driver => {return driver.createdInDb === true})
            }
            if (action.payload === "API") {
                filterDrivers = state.allDrivers.filter(driver => {return !driver.hasOwnProperty("createdInDb")})
            }
            return {...state,drivers:filterDrivers}

        case "ERROR":
            errors.errors = state.payload;
            if (errors.hasOwnProperty("errors")) {
                return errors
            };
    }
};

export default rootReducer;