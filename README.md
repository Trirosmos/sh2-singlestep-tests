# Hitachi SH-2 JSON tests

Changes from SH-4 test suite:

- Remove tests with SH-4-exclusive instructions
- Remove tests with SZ != 0 or PR != 0, since those don't exist on a SH-2
- Remove floating point registers from initial and final state
- Remove status registers that don't exist on SH-2 from initial and final state
- Remove SR bits that don't exist
- New tests generated for `LDC.L @Rm, SR`, `LDC Rm, SR` and `RTE`, since they'd change the SR and thus the register bank bit, which doesn't exist on SH-2.
