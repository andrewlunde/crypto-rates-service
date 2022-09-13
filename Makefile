build-srv:
	docker build --platform amd64 -t alunde/crypto-rates-service-srv:latest -f srv/Dockerfile .
build-app:
	docker build --platform amd64 -t alunde/crypto-rates-service-app:latest -f app/Dockerfile .

docker-push: build-srv build-app
	docker push alunde/crypto-rates-service-srv:latest
	docker push alunde/crypto-rates-service-app:latest

helm-deploy:
	helm upgrade -n dev -i crypto-rates-service-srv helm/crypto-rates-service-srv --install
	helm upgrade -n dev -i crypto-rates-service-app helm/crypto-rates-service-app --install

helm-undeploy:
	helm uninstall -n dev crypto-rates-service-app
	helm uninstall -n dev crypto-rates-service-srv
