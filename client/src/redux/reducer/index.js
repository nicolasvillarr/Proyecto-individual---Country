const initialState = {
    country : [],
    activities: [],
    continent: [],
    population:[],
    activity: [],
    allCountry:[],
    countryID: []
}
function rootReducer(state = initialState, action) {
switch (action.type) {
    

    case 'GET_COUNTRY':
        return{
            ...state,
            allCountry:action.payload,
            country : action.payload,
            continent: action.payload,
            activities: action.payload,
            
            
        };
        case 'POST_ACTIVITY': {
            return{
                ...state,
                activities : action.payload
            };
        }
        case 'GET_ACTIVITY': {
            return {
                ...state,
                activity: action.payload
            }
        }

        case 'COUNTRY_DETAILS': {
            return {
                ...state,
                // activity: action.payload,
                countryID: action.payload
            }
        }
    case 'SEARCH_COUNTRY': {
        // let a = state.continent.map(e => e.continent)
        // console.log(a)
        // console.log(action.payload[0].continent)
        return{
                ...state,
                country: action.payload,
            };
    }
    
    case 'NO_SEARCH': {
        return{
            ...state,
            country: action.payload,
        };
    }
    // case '' : {
    //     return{
            
    //     }
    // }
    
    case 'FILTRO_CONTINET': {
        let filterContinent = state.continent;
        let continentFilter = action.payload === 'all' ? filterContinent : filterContinent.filter((e) => 
        e.continent === action.payload)
        return{
            ...state,
            country: continentFilter
        };
    }
    case 'FILTRO_ACTIVITY': {
        const todos = state.allCountry
            const allActivity = state.activities
            console.log("🚀 ~ file: index.js ~ line 78 ~ rootReducer ~ allActivity", allActivity)
            const filtroActivity = action.payload === 'all' ? allActivity : allActivity.filter(d => d.activities.find((e) => e.name.toLowerCase() === action.payload))
            console.log(filtroActivity)     
        return{
            ...state,
            country : action.payload === 'all' ? todos : filtroActivity
        };
    }
    case 'FILTRO_POPULATION': {
        const FiltroP = action.payload === 'mayor' 
        ? state.country.sort((a,b)=>{
                if (b.population > a.population) return 1;
                if (a.population > b.population) return -1;
                return 0;
              })
            : state.country.sort((a, b) => {
                if (b.population > a.population) return -1;
                if (a.population > b.population) return 1;
                return 0;
              });
            
            return{
                ...state,
                population : FiltroP 
            };
    }
    case 'FILTRO_AZ': {

        const ordenAZ = action.payload === 'asc'
        
? state.country.sort((a,b)=>{
    console.log(a.name)
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
        })
: state.country.sort((a, b) => {
    
            if (a.name.replace('Å', 'A') > b.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
        });
        return{
            ...state,
            country : ordenAZ 

        };
    }
    default:
        return state;
}
}

export default rootReducer