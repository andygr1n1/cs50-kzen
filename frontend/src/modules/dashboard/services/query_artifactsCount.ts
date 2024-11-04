import { tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/helpers/processMessage'

export type IArtifactsCount = {
    activeNotesCount?: number
    activeSprintsCount?: number
    activeGoalsCount?: number
    activeAchCount?: number
}

export const query_artifactsCount = async (id: string): Promise<IArtifactsCount | undefined> => {
    const client = await generateTSClient()

    return await tryCatchRequest<undefined, IArtifactsCount | undefined>(
        () =>
            client
                .query({
                    __name: 'query_artifactsCount',
                    goals_aggregate: {
                        __args: {
                            where: { owner_id: { _eq: id }, status: { _eq: 'active' }, deleted_at: { _is_null: true } },
                        },
                        aggregate: { count: true },
                    },
                })
                .then((res) => {
                    const data = res
                    return {
                        activeGoalsCount: data?.goals_aggregate.aggregate?.count || 0,
                    }
                }),
        (e) => {
            processError(`query_artifactsCount: ${e}`)
        },
    )
}
