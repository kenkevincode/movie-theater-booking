export default {
    reserve: async payload => {
        console.log({
            payload: {
                ...payload,
                time: new Date().toISOString()
            },
            status: 'pending'
        })

        await new Promise(resolve => setTimeout(resolve, 500))

        const responce = {
            data: { reservedId: payload.point },
            status: 'success'
        }

        console.log(responce)

        if (responce.status === 'success') {
            return responce.data.reservedId
        }

        throw new Error(responce.error)
    }
}