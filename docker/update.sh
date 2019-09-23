scp docker-compose.yml root@220.241.121.93:~/
SCRIPT="docker stack deploy -c docker-compose.yml autogen"
SCR=${SCRIPT}
ssh -l root 220.241.121.93 "${SCR}"
exit