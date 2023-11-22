window.BENCHMARK_DATA = {
  "lastUpdate": 1700659321815,
  "repoUrl": "https://github.com/abichinger/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "17becaef6cfd033a07874fce1ade4953e6ead8b5",
          "message": "Remove PerformancePR.yml for security issue",
          "timestamp": "2023-10-30T14:05:45+08:00",
          "tree_id": "0c6d6373c498a1bfc104886cb2eeb041767416f3",
          "url": "https://github.com/abichinger/casbin/commit/17becaef6cfd033a07874fce1ade4953e6ead8b5"
        },
        "date": 1700659321298,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.69,
            "unit": "ns/op",
            "extra": "67509348 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67509348 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67509348 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 168.8,
            "unit": "ns/op",
            "extra": "7053990 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7053990 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7053990 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 170.4,
            "unit": "ns/op",
            "extra": "7075383 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7075383 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7075383 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 183.7,
            "unit": "ns/op",
            "extra": "6465430 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6465430 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6465430 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 186.1,
            "unit": "ns/op",
            "extra": "6283912 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6283912 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6283912 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 165.5,
            "unit": "ns/op",
            "extra": "6700954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "6700954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6700954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 170.7,
            "unit": "ns/op",
            "extra": "6915955 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6915955 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6915955 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 183.4,
            "unit": "ns/op",
            "extra": "6628746 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6628746 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6628746 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2940,
            "unit": "ns/op",
            "extra": "409776 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1540,
            "unit": "B/op",
            "extra": "409776 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "409776 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 184.6,
            "unit": "ns/op",
            "extra": "6460308 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6460308 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6460308 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 171.5,
            "unit": "ns/op",
            "extra": "6974743 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6974743 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6974743 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 178.7,
            "unit": "ns/op",
            "extra": "6595812 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6595812 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6595812 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 312.2,
            "unit": "ns/op",
            "extra": "3859292 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3859292 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3859292 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 125.7,
            "unit": "ns/op",
            "extra": "9218854 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9218854 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9218854 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 452.7,
            "unit": "ns/op",
            "extra": "2666066 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2666066 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2666066 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 482.8,
            "unit": "ns/op",
            "extra": "2516853 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2516853 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2516853 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 488.1,
            "unit": "ns/op",
            "extra": "2418387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2418387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2418387 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 489.7,
            "unit": "ns/op",
            "extra": "2400824 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2400824 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2400824 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 544.5,
            "unit": "ns/op",
            "extra": "2057126 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2057126 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2057126 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1129,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 483.4,
            "unit": "ns/op",
            "extra": "2508842 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2508842 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2508842 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 512.8,
            "unit": "ns/op",
            "extra": "2204247 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2204247 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2204247 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1268,
            "unit": "ns/op",
            "extra": "1075833 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 292,
            "unit": "B/op",
            "extra": "1075833 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1075833 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.68,
            "unit": "ns/op",
            "extra": "66164372 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66164372 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66164372 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3753,
            "unit": "ns/op",
            "extra": "314713 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1510,
            "unit": "B/op",
            "extra": "314713 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "314713 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5571,
            "unit": "ns/op",
            "extra": "187561 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2064,
            "unit": "B/op",
            "extra": "187561 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "187561 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47636,
            "unit": "ns/op",
            "extra": "23658 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20213,
            "unit": "B/op",
            "extra": "23658 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "23658 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 486280,
            "unit": "ns/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191712,
            "unit": "B/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5113515,
            "unit": "ns/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903425,
            "unit": "B/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48265,
            "unit": "allocs/op",
            "extra": "226 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 56886,
            "unit": "ns/op",
            "extra": "20889 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20285,
            "unit": "B/op",
            "extra": "20889 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20889 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 553056,
            "unit": "ns/op",
            "extra": "1960 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194585,
            "unit": "B/op",
            "extra": "1960 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1960 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5958845,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940942,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60615,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4598,
            "unit": "ns/op",
            "extra": "238428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1847,
            "unit": "B/op",
            "extra": "238428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "238428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5192,
            "unit": "ns/op",
            "extra": "232960 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "232960 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "232960 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2828,
            "unit": "ns/op",
            "extra": "406988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1534,
            "unit": "B/op",
            "extra": "406988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "406988 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3942965,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1324180,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6201,
            "unit": "ns/op",
            "extra": "191618 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3067,
            "unit": "B/op",
            "extra": "191618 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "191618 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6918,
            "unit": "ns/op",
            "extra": "173302 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2483,
            "unit": "B/op",
            "extra": "173302 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "173302 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4244,
            "unit": "ns/op",
            "extra": "275787 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1763,
            "unit": "B/op",
            "extra": "275787 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "275787 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23289,
            "unit": "ns/op",
            "extra": "51831 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16722,
            "unit": "B/op",
            "extra": "51831 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51831 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69845,
            "unit": "ns/op",
            "extra": "17120 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17120 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17120 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 732981,
            "unit": "ns/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8229261,
            "unit": "ns/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349927,
            "unit": "B/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "146 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6065163413,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5341273360,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948835,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 167782110,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141364976,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676527,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6278121845,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5482161136,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62560218,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10615,
            "unit": "ns/op",
            "extra": "114829 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7609,
            "unit": "B/op",
            "extra": "114829 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114829 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 481.7,
            "unit": "ns/op",
            "extra": "2475970 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2475970 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2475970 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10290,
            "unit": "ns/op",
            "extra": "114514 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7605,
            "unit": "B/op",
            "extra": "114514 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114514 times\n4 procs"
          }
        ]
      }
    ]
  }
}