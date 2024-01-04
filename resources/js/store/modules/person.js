import router from '../../router'

const state = {
    person: null,
    persons: null
}

const getters = {
    person: state => {
        return state.person
    },
    persons: state => {
        return state.persons
    },
}

const actions = {
    getPerson({commit}, id) {
        axios.get(`/api/persons/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
            })
    },

    getPersons({commit}) {
        axios.get('/api/persons')
            .then(response => {
                commit('setPersons', response.data.data)
            })
    },

    isDelete({dispatch}, id) {
        axios.delete(`/api/persons/${id}`)
            .then(response => {
                dispatch('getPersons')
            })
    },

    updatePerson({}, data) {
        axios.patch(`/api/persons/${data.id}`, {name: data.name, age: data.age, job: data.job})
            .then(response => {
                router.push({ name: 'persons.show', params: { id: data.id } })
            })
    },

    storePerson({}, data) {
        axios.post('/api/persons', {name: data.name, age: data.age, job: data.job})
            .then(response => {
                router.push({ name: 'persons.index' })

            })
    }
    
}

const mutations = {
    setPerson(state, person){
        state.person = person
    },

    setPersons(state, persons){
        state.persons = persons
    }
}

export default {
    state, getters, mutations, actions
}