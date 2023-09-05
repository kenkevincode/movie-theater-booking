export default {
    reserv: async payload => {
        console.log({
            payload: {
                ...payload,
                timeID: new Date().toISOString()
            },
            status: 'pending'
        })

        await new Promise(resolve => setTimeout(resolve, 500))

        const responce = {
            data: { reservedId: payload.pointId },
            status: 'success'
        }

        console.log(responce)

        if (responce.status === 'success') {
            return responce.data.reservedId
        }

        throw new Error(responce.error)
    }
}