// Application contracts only; not eve framework API definitions.
export const toolContracts=Object.freeze({
 search_public_web:{input:['query','windowStart','windowEnd'],output:['candidateUrls'],access:'public-read'},
 fetch_public_source:{input:['url'],output:['content','metadata','retrievalStatus'],access:'public-read'},
 find_previous_coverage:{input:['topic','window'],output:['records'],access:'designated-records-read'},
 append_evidence:{input:['idempotencyKey','sources','claims','links'],output:['recordIds'],access:'append-only'},
 save_checkpoint:{input:['runId','expectedVersion','stage','pendingWork'],output:['checkpointId'],access:'current-run-write'},
 save_report_draft:{input:['runId','claimIds','content'],output:['reportId','version','hash'],access:'draft-only'},
 record_monitoring_item:{input:['claimId','trigger','nextCheck'],output:['monitoringId'],access:'records-append'}
});
export async function unconfiguredAdapter(){throw new Error('Live adapter unconfigured')}
